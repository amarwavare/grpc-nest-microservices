:: Run Gateway - DCP
cd C:\Users\Amarnath\Workspace\Open-source\grpc-nest-microservices
start cmd.exe /k "xcopy /e /i /y  C:\Users\Amarnath\Workspace\Open-source\grpc-nest-microservices\proto C:\Users\Amarnath\Workspace\Open-source\grpc-nest-microservices\apps\gateway\src\proto && npm run start:dev gateway & exit"

:: Run Authentication - DCP
cd C:\Users\Amarnath\Workspace\Open-source\grpc-nest-microservices
start cmd.exe /k "xcopy /e /i /y  C:\Users\Amarnath\Workspace\Open-source\grpc-nest-microservices\proto C:\Users\Amarnath\Workspace\Open-source\grpc-nest-microservices\apps\authentication\src\proto && npm run start:dev authentication & exit"