variable "region" {
 type        = string
 description = "AWS default region"
 default     = "eu-central-1"
}

variable "cidr" {
 type        = string
 description = "AWS default cidr"
 default     = "192.168.0.0/24"
}

variable "kubernetes_version" {
  type        = string
  description = "Kubernetes version to use in EKS"
  validation {
    condition     = contains(["1.29", "1.30", "1.31"], var.kubernetes_version)
    error_message = "Invalid kubernetes version provided, allowed are 1.29, 1.30 and 1.31"
  }
  default = "1.30"
}

variable "tags" {
  type        = map(string)
  description = "Tags to be used for all provisioned resources"
  default     = {
    module_name = "eks"
    created_by  = "terraform"
  }
}
