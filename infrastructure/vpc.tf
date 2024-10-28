locals {
  subnet_cidrs = cidrsubnets(var.cidr, 4, 4, 4, 4)
}

resource "aws_eip" "nat" {
  count = 1
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "eks-vpc"
  cidr = var.cidr

  azs             = formatlist("${var.region}%s", ["a", "b"])
  private_subnets = slice(local.subnet_cidrs, 0, 2)
  public_subnets  = slice(local.subnet_cidrs, 2, 4)


  enable_nat_gateway = true
  single_nat_gateway = true
  one_nat_gateway_per_az = false
  reuse_nat_ips       = true    
  external_nat_ip_ids = "${aws_eip.nat.*.id}"

  tags = var.tags
}

