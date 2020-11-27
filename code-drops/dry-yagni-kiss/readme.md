# DRY

> Don't reapet yourself.

Não repita uma regra de negocio.

# Exemplo frontend

```jsx
<Table
  columns={['name']}
  data={[]}
  parseData={(column) => column.name == 'name'}
  sort
/>
```

# Exemplo backend

user {
name,
email,
password
}

crudController = um controller que automatiza tudo (index, show, create, update, delete).

Automizar um código de uma forma muito prematura.

Exemplo de como usar:
A três formas de criar um usuário, ou seja, três caminhos diferentes para a criação, e em todas elas
você repete o envio de email. Nesse caso voce deve isolar o envio de email para não ter que repetir
a regra de negocio.

# KISS

> Keep it simple and stupid.

Qualquer pessoa consiga ser o código que você está criando.

```js
// sem kiss
function showUserInformation(data){
  const data.map(u => ({
    name: u.name,
    age: u.age
  }))
}

// com kiss
function getAgeAndNameOfUser(user){
  const user.map(user => ({
    name: user.name,
    age: user.age
  }))
}
```

# YAGNI

> You ain't gonna need it!

Não tente adicioanar ferramentas e arquiteturas demais no seu projeto.
