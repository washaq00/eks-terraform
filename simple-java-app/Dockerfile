FROM openjdk:11 AS base

COPY . .

RUN apt update && apt install maven -y

RUN mvn install

FROM tomcat:9-jre11 

WORKDIR /usr/local/tomcat/webapps/

COPY --from=base ./target/*.war /usr/local/tomcat/webapps/ROOT.war

EXPOSE 8080

CMD ["catalina.sh", "run"]
