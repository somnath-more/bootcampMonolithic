FROM adoptopenjdk/maven-openjdk11 as build
WORKDIR /backend
COPY . .
RUN mvn clean package -DskipTests
FROM adoptopenjdk/openjdk11
COPY --from=build /backend/target/*.jar app.jar
EXPOSE 8000
CMD ["java","-jar","app.jar"]