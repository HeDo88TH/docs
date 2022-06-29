"use strict";(self.webpackChunkddb_docs=self.webpackChunkddb_docs||[]).push([[170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},r="Registry",l={unversionedId:"registry",id:"registry",title:"Registry",description:"Registry is a simple, user-friendly aerial data management and storage",source:"@site/docs/registry.md",sourceDirName:".",slug:"/registry",permalink:"/docs/registry",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Desktop",permalink:"/docs/desktop"},next:{title:"Server",permalink:"/docs/server"}},s={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Running in production",id:"running-in-production",level:2},{value:"Standalone installation with docker (only for testing)",id:"standalone-installation-with-docker-only-for-testing",level:2},{value:"Build Docker image",id:"build-docker-image",level:2},{value:"Native installation",id:"native-installation",level:2},{value:"Project architecture",id:"project-architecture",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Getting Help",id:"getting-help",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"registry"},"Registry"),(0,i.kt)("p",null,"Registry is a simple, user-friendly aerial data management and storage\napplication that you can self-host on your own server. It provides a\nsimple, fast and reliable platform for hosting and sharing geospatial\nimages and data."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7868983/152324827-d16949b8-dd96-4d3a-b5c5-a732e999f070.png",alt:"orthophoto"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7868983/152324902-abfe0910-6115-46c5-b561-59bc5a417dda.png",alt:"files"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7868983/152324757-4ee73f71-bf8e-4c72-9910-7073a68daee3.png",alt:"point-cloud"})),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"To get started, you need to install the following applications (if they\nare not installed already):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com"},"Docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-compose"))),(0,i.kt)("p",null,"Single command startup:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ddb-registry && cd ddb-registry &&   curl -O docker-compose.yml https://raw.githubusercontent.com/DroneDB/Registry/master/docker/testing/docker-compose.yml && \\  \ncurl -O appsettings-testing.json https://raw.githubusercontent.com/DroneDB/Registry/master/docker/testing/appsettings-testing.json && \\\ncurl -O initialize.sql https://raw.githubusercontent.com/DroneDB/Registry/master/docker/testing/initialize.sql && \\ \ndocker-compose up\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows (Poweshell)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ddb-registry; cd ddb-registry;\ncurl -O docker-compose.yml https://raw.githubusercontent.com/DroneDB/Registry/master/docker/testing/docker-compose.yml;\ncurl -O appsettings-testing.json https://raw.githubusercontent.com/DroneDB/Registry/master/docker/testing/appsettings-testing.json;\ncurl -O initialize.sql https://raw.githubusercontent.com/DroneDB/Registry/master/docker/testing/initialize.sql;\ndocker-compose up -d\n")),(0,i.kt)("p",null,"This command will start a new stack composed by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MariaDB database"),(0,i.kt)("li",{parentName:"ul"},"PHPMyAdmin, exposed on port 8080"),(0,i.kt)("li",{parentName:"ul"},"Registry, exposed on port 5000")),(0,i.kt)("p",null,"Default username and password are ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),". After logging\nin you can check the health of the application by visiting\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5000/health"},"http://localhost:5000/status"),"."),(0,i.kt)("p",null,"Registry supports Swagger API documentation on\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5000/swagger/"},"http://localhost:5000/swagger"),"\nand Hangfire as task runner on\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:5000/hangfire/"},"http://localhost:5000/hangfire"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This configuration is for local testing only: ",(0,i.kt)("strong",{parentName:"p"},"DO NOT USE\nIT IN PRODUCTION"),". If you want to use the application in production\ncheck the following section."))),(0,i.kt)("h2",{id:"running-in-production"},"Running in production"),(0,i.kt)("p",null,"You will need ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git"),". Clone the repo and\ninitialize submodules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DroneDB/Registry\ncd Registry\ngit submodule update --init --recursive\n")),(0,i.kt)("p",null,"And then run the following commands:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker/production\nchmod +x run.sh\n./run.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd docker/production\nrun.bat\n")),(0,i.kt)("p",null,"Check that everything is running smoothly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose ps\ndocker-compose logs -f\n")),(0,i.kt)("p",null,"When all the containers are running, you can then open\nhttp://localhost:5000 in your browser, use ",(0,i.kt)("inlineCode",{parentName:"p"},"admin:password")," as default\ncredentials."),(0,i.kt)("p",null,"You can stop the application by issuing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run.sh")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"run.bat")," script will create the default\n",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file, the database initialization script and start\nthe Docker containers. It is possible to customize the startup settings\nby creating a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the same folder. Here it is an example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux (quotes are important)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'MYSQL_ROOT_PASSWORD="default-root-password"\nMYSQL_PASSWORD="default-mysql-password"\nREGISTRY_ADMIN_MAIL="test@test.it"\nREGISTRY_ADMIN_PASSWORD="password"\nREGISTRY_SECRET="longandrandomsecrettobegeneratedusingcryptographicallystrongrandomnumbergenerator"\nEXTERNAL_URL=""\nCONTROL_SWITCH=\'$controlSwitch\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows (values without quotes)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'MYSQL_ROOT_PASSWORD=default-root-password\nMYSQL_PASSWORD=default-mysql-password"\nREGISTRY_ADMIN_MAIL=test@test.it\nREGISTRY_ADMIN_PASSWORD=password\nREGISTRY_SECRET=longandrandomsecrettobegeneratedusingcryptographicallystrongrandomnumbergenerator\nEXTERNAL_URL=\nCONTROL_SWITCH=$controlSwitch\n')),(0,i.kt)("p",null,"If you want to reduce the log verbosity, you can change ",(0,i.kt)("inlineCode",{parentName:"p"},'"Information"'),"\nto ",(0,i.kt)("inlineCode",{parentName:"p"},'"Warning"')," in ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"LevelSwitches": {\n    "$CONTROL_SWITCH": "Warning"\n},\n')),(0,i.kt)("p",null,"Then run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose restart registry\n")),(0,i.kt)("h2",{id:"standalone-installation-with-docker-only-for-testing"},"Standalone installation with docker (only for testing)"),(0,i.kt)("p",null,"The following steps start a new instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"registry")," with the default\nconfiguration and ",(0,i.kt)("inlineCode",{parentName:"p"},"SQLite")," as backend database. They work both on linux\nand windows (powershell):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O appsettings.json https://raw.githubusercontent.com/DroneDB/Registry/master/Registry.Web/appsettings-default.json\n\ndocker run -it --rm -p 5000:5000 -v ${PWD}/registry-data:/Registry/App_Data -v ${PWD}/appsettings.json:/Registry/appsettings.json dronedb/registry:latest\n")),(0,i.kt)("h2",{id:"build-docker-image"},"Build Docker image"),(0,i.kt)("p",null,"If you want to build the image from scratch, you can use the following\ncommands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DroneDB/Registry\ncd Registry\ngit submodule update --init --recursive\ndocker build . -t dronedb/registry\n")),(0,i.kt)("h2",{id:"native-installation"},"Native installation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Building")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Registry")," is written in C","#"," on .NET Core 6 platform and runs natively\non both Linux and Windows. To install the latest .NET SDK see the\n",(0,i.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},"official download\npage"),". Before\nbuilding registry ensure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"ddblib")," in your path, if not download\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DroneDB/DroneDB/releases"},"latest release")," and\nadd it to ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,i.kt)("p",null,"Clone the repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/DroneDB/Registry\ncd Registry\ngit submodule update --init --recursive\n")),(0,i.kt)("p",null,"Build the solution from the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet build\n")),(0,i.kt)("p",null,"Run the tests to make sure the project is working correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet test\n")),(0,i.kt)("p",null,"Then build the Hub interface (need ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/download/release/v14.18.3/"},"NodeJS\n14+"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd Registry.Web/ClientApp\nnpm install -g webpack@4\nnpm install\nwebpack\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Running")),(0,i.kt)("p",null,"On the first start ",(0,i.kt)("inlineCode",{parentName:"p"},"Registry")," will create ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file with\ndefault values. Feel free to modify it to your needs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet run --project Registry.Web\n")),(0,i.kt)("p",null,"It will start a web server listening on two endpoints:\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://localhost:5001")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),". You can change the\nendpoints using the ",(0,i.kt)("inlineCode",{parentName:"p"},"urls")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'dotnet run --project Registry.Web --urls="http://0.0.0.0:6000;https://0.0.0.0:6001"\n')),(0,i.kt)("h2",{id:"project-architecture"},"Project architecture"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("img",{parentName:"em",src:"https://user-images.githubusercontent.com/7868983/151846022-891685f7-ef47-4b93-8199-d4ac4e788c5d.png",alt:"dronedb-registry-architecture"}))),(0,i.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,i.kt)("p",null,"The configuration file is ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json"),", if not present it will be\ncreated with default values (",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings-default.json"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AuthCookieName")),(0,i.kt)("p",null,"The name of the authorization cookie."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"jwtToken"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AuthProvider")),(0,i.kt)("p",null,"The authentication provider, supported values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sqlite"),": SQLite database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mysql"),": MySQL or MariaDB,\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql#supported-database-servers-and-versions"},"compatibility"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mssql"),": Microsoft SQL Server")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"Sqlite")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityConnection")," connection string should be changed accordingly"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BatchTokenLength")),(0,i.kt)("p",null,"The length of the token generated in the share endpoint."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"32"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CachePath")),(0,i.kt)("p",null,"The path to the cache folder. This is used to store the generated tiles and thumbnails."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"./App_Data/cache"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CacheProvider")),(0,i.kt)("p",null,"The additional cache provider, supported values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InMemory"),": In-memory cache provider. Example value:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{ "type": "InMemory" }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Redis"),": Redis cache provider. Example value:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n   "type": "Redis", \n   "settings": { \n      "InstanceAddress": "localhost:5002", \n      "InstanceName": "registry" \n   } \n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," (",(0,i.kt)("inlineCode",{parentName:"p"},"InMemory")," is used)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ClearCacheInterval")),(0,i.kt)("p",null,"The interval to clear the file cache (TimeSpan)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"01:00:00")," (1 hour)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DefaultAdmin")),(0,i.kt)("p",null,"The default admin user."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Email": "admin@example.com",\n    "UserName": "admin",\n    "Password": "password"\n},\n')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"EnableStorageLimiter")),(0,i.kt)("p",null,"Enable the storage limiter. Registry will limit the storage usage of the user based on its metadata (",(0,i.kt)("inlineCode",{parentName:"p"},"maxStorageMB")," key)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ExternalAuthUrl")),(0,i.kt)("p",null,"The URL of the external authentication provider."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ExternalUrlOverride")),(0,i.kt)("p",null,"The external URL of Registry. This is used when the application is behind a reverse proxy."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HangfireProvider")),(0,i.kt)("p",null,"The Hangfire provider, supported values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InMemory"),": In-memory provider. Example value:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mysql"),": MySQL or MariaDB")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"InMemory")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"HangfireConnection")," connection string should be changed accordingly"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MaxRequestBodySize")),(0,i.kt)("p",null,"The maximum request body size. It sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"MultipartBodyLengthLimit")," of the kestrel ",(0,i.kt)("inlineCode",{parentName:"p"},"FormOptions"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," (default)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RandomDatasetNameLength")),(0,i.kt)("p",null,"The length of the random dataset name, generated when calling the share endpoint."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"16"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RegistryProvider")),(0,i.kt)("p",null,"The Registry database provider, supported values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sqlite"),": SQLite database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mysql"),": MySQL or MariaDB, (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql#supported-database-servers-and-versions"},"compatibility"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mssql"),": Microsoft SQL Server")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"Sqlite")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RegistryConnection")," connection string should be changed accordingly"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RevokedTokens")),(0,i.kt)("p",null,"The list of revoked JWT tokens."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Secret")),(0,i.kt)("p",null,"The secret used as key to generate the JWT tokens."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"StoragePath")),(0,i.kt)("p",null,"The path to the storage folder. This is used to store all the uploaded datasets."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"./App_Data/datasets")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ThumbnailsCacheExpiration")),(0,i.kt)("p",null,"The expiration time of the thumbnails cache (TimeSpan)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"00:30:00")," (30 minutes)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TilesCacheExpiration")),(0,i.kt)("p",null,"The expiration time of the tiles cache (TimeSpan)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"00:30:00")," (30 minutes)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TokenExpirationInDays")),(0,i.kt)("p",null,"The number of days after which the JWT tokens will expire."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is 30 days."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UploadBatchTimeout")),(0,i.kt)("p",null,"The timeout for the share upload endpoint. It is the maximum time allowed between the uploads."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"01:00:00")," (1 hour)."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WorkerThreads")),(0,i.kt)("p",null,"The number of worker threads used by the application."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"0")))),(0,i.kt)("h2",{id:"getting-help"},"Getting Help"),(0,i.kt)("p",null,"Commercial support is available. ",(0,i.kt)("a",{parentName:"p",href:"https://dronedb.app/contact"},"Get in touch"),"."))}m.isMDXComponent=!0}}]);