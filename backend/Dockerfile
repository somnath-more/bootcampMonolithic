FROM openjdk:17-jdk
# WORKDIR /backend
COPY ./target/*.jar app.jar
EXPOSE 8000
CMD ["java","-jar","app.jar"]