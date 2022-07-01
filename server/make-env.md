# npm 프로젝트 생성
npm init

# 타입스크립트 설치
npm install --save-dev typescript

# 타입스크립트 프로젝트 생성
./node_modules/typescript/bin/tsc --init

# 의존라이브러리 설치
npm i express
npm install --save-dev @types/express

# 컴파일
./node_modules/typescript/bin/tsc

# 실행
node ./dist/app.js

# 컴파일 및 실행 한번에 하기 => ts-node
npm i -g ts-node
ts-node ./src/app.ts

# 컴파일 및 실행 및 ts 파일 수정 감시 => nodemon
npm i -g nodemon
nodemon ./src/app.ts


