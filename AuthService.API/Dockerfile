# Use the official image as a parent image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

# Copy the .csproj files
COPY ["AuthService.API/AuthService.API.csproj", "AuthService.API/"]
COPY ["AuthService.Application/AuthService.Application.csproj", "AuthService.Application/"]
COPY ["AuthService.Domain/AuthService.Domain.csproj", "AuthService.Domain/"]
COPY ["AuthService.Infrastructure/AuthService.Infrastructure.csproj", "AuthService.Infrastructure/"]

# Restore dependencies
RUN dotnet restore "AuthService.API/AuthService.API.csproj"

# Copy the rest of the files and build the application
COPY . .
WORKDIR /src/AuthService.API
RUN dotnet build "AuthService.API.csproj" -c Release -o /app/build

# Publish the app to the /app directory
RUN dotnet publish "AuthService.API.csproj" -c Release -o /app/publish

# Use the runtime image to run the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Copy the app from the build container
COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "AuthService.API.dll"]
