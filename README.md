🐙 Gerenciador e compartilhador de repositórios torrent
# Como Funciona?
Já teve aquela lista de filmes que gostaria de compartilhar com o mundo de forma rapida?, o octo-torrent ajuda a sua divulgação de forma anonima e segura sem guardar nenhum tipo de dados do criador ou visualizador.
## Como visualizar?
Primeiramente é necessario ter o JSON do repositorio alvo,após ele estar na pasta raíz do script digite o comando:
```
node octo.js -s nome_do_arquivo.json
```
Se tudo está corretamente estruturado você ira receber a seguinte mensagem:
```
➤ Repository-Title: NOME_DO_REPOSITORIO

Magnets Links!
``` 
## Como criar o meu repositorio?

É necessario um conhecimento basico de estruturação em JSON, crie um arquivo .json com o nome que quiser e siga o exemplo abaixo:
```
{
  "server": [
    {
      "nochange": "octorrent",
      "title": "Nome_do_repositorio",
      "isweb": 0,
      "weblink": "OPCIONAL",
      "txt": "Filme - MagnetLink \n Filme - MagnetLink"
    }
  ]
}
```

* NoChange = Não troque o nome!
* Title = Coloque o nome do seu repositorio
* IsWeb = Seu repositorio pode ser retirado de um site? (1 = yes / 0 = no)
* weblink = Se IsWeb for 1 coloque um link raw, se for 0 coloque "Opcional"
* txt = O texto do seu repositorio, use "\n" para pular de linha.

### Criar um repositorio usando IsWeb 

Hospede um arquivo txt ou apenas um texto em sites de pastecloud, como pastebin, hastebin, freethinking e etc, selecione o link RAW onde há apenas o texto e adicione ao seu repositório!
obs. Não se esqueça de substituir o IsWeb no .json para 1
