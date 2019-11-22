# gradle-build-java-libraries-demo

> https://guides.gradle.org/building-java-libraries


## Summary

- Assemble the library JAR
  ```
  ./gradlew build
  vi ./build/reports/tests/test/index.html
  ```

- Customize the library JAR
  ```
  vi ./build.gradle

  jar {
      manifest {
          attributes('Implementation-Title': project.name,
                    'Implementation-Version': project.version)
      }
  }
  ```
  ```
  jar xf ./build/libs/building-java-libraries-0.1.0.jar ./META-INF/MANIFEST.MF
  cat ./META-INF/MANIFEST.MF
  ```


- Adding API documentation
  ```
  ./gradlew javadoc
  ```