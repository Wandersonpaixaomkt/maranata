# Maranata | Site estilo Link da Bio

Projeto estático em HTML, CSS e JavaScript, pronto para abrir localmente e editar sem depender de build.

## Estrutura
- `index.html` → estrutura do site
- `styles.css` → visual e animações
- `script.js` → categorias, vendedores, ofertas e carrossel
- `assets/intro.gif` → animação inicial (substitua pelo seu GIF)
- `assets/vendors/` → fotos dos vendedores
- `assets/offers/` → imagens das ofertas
- `assets/store/` → imagens do carrossel da loja

## Como editar
### 1) Trocar o GIF de abertura
Substitua o arquivo:
`assets/intro.gif`

Mantenha o mesmo nome para não precisar alterar o código.

### 2) Editar vendedores e categorias
Abra `script.js` e altere:
- `categories`
- `vendors`

Cada vendedor possui:
- `name`
- `role`
- `phoneDisplay`
- `phoneLink`
- `photo`

### 3) Editar ofertas da semana
No `script.js`, altere o array:
- `offers`

Você pode trocar:
- imagem
- nome
- preço antigo
- preço atual
- desconto

### 4) Trocar imagens do carrossel
No `script.js`, altere o array:
- `storeImages`

E substitua os arquivos da pasta:
- `assets/store/`

## Como abrir localmente
Basta dar duplo clique no arquivo `index.html`.

## Observação
Os números de WhatsApp e imagens atuais são exemplos visuais e devem ser substituídos pelos dados reais da loja.


Atualização: contatos e categorias preenchidos com base no PDF de cadastro enviado pelo cliente.