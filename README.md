# jelly_scroll_react_native_tsx
Efeito jelly aplicado a um ScrollView


# :question: Por quê? 
Este aplicativo foi desenvolvido para testar o aprendizado de [Animações](https://github.com/software-mansion/react-native-reanimated) no [React Native](https://reactnative.dev). </br>
Neste projeto foi aplicado um efeito de distorção a um componente (Card.tsx) ao rolar uma lista (ScrollView).</br>
Obtendo o valor de arraste da lista (y, horizontal), dividimos esse valor pelo valor da animação (clock) e aplicamos uma interpolação com ase na quantidade de distorção que queremos.

# :iphone: Demo
iOS            |  Android
:-------------------------:|:-------------------------:
![https://github.com/diegodls/jelly_scroll_react_native_tsx/blob/assets/iOS_demo.gif?raw=true](https://github.com/diegodls/jelly_scroll_react_native_tsx/blob/assets/iOS_demo.gif?raw=true) | ![https://github.com/diegodls/jelly_scroll_react_native_tsx/blob/assets/android_demo.gif?raw=true](https://github.com/diegodls/jelly_scroll_react_native_tsx/blob/assets/android_demo.gif?raw=true)

# :rocket: Iniciando
Para executar este aplicativo. você deverá ter um ambiente de [trabalho configurado](https://www.google.com/) para o desenvolvimento em [React Native](https://reactnative.dev).</br>
Para testes foram utilizados o emulador do Mac Os Catalina e um dispositivo físico com sistema operacional Android.</br>

**Começando:**
* Clone o repositório com o comando `git clone` ([veja mais](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository))
* Abra um prompt de comando/cmd/terminal na pasta raiz ou navegue até ela, insira o comando `npx isntall` ou `npm install` ou `yarn install`, dependendo do gerenciador de pacotes que você usa, este comando serve para instalar os pacotes/módulos utilizado nesse projeto
* Após a instalação dos pacotes/módulos, você pode executar no emulador/dispositivo com o comando `npx react-native run-android` (ou yarn ios, ou yarn android, dependendo da versão).

# :nut_and_bolt: Módulos
Neste projeto foram utilizado os seguintes módulos:</br>
[Reanimated](https://github.com/software-mansion/react-native-reanimated)</br>
[Redash](https://wcandillon.github.io/react-native-redash/)</br>

**E todas as dependências desses módulos que estão presentes em seus respectivos repositórios! **

# :clap: Agradecimentos
Agradecimentos a todos os desenvolvedores dos módulos acima.

# :page_with_curl: Notas/Problemas
Baseado em: [Cuberto](https://twitter.com/cuberto/status/1290259328725852172)</br>
Com ajuda de: [William Candillon](https://www.youtube.com/watch?v=Xnj6uoW2PJM)</br>
Sinta-se livre para dar sugestões. :thumbsup:</br>

# :warning: Licença
Você pode usar este aplicativos para estudos, e apenas para estudo, está proibido a sua publicação ou apropriação do código.
