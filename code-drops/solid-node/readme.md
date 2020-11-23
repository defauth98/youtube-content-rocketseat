# 5 principios do solider

## S - Single Responsibility Principle

> Cada classe ou arquivo na nossa aplicação deve ter apenas uma resposabildade

## O - Open closed principle

OBS: De acordo com o diego, esse não é um dois principios que você deve se importar tanto.

> Uma class deve ser aberta para extenções, mas não deve ser aberta para modifições

## L - Liskov substitution principle

> Você pode substituir implementações sem danificar toda a funcionalidade.

## I - Interface agreged principle

OBS: De acordo com o diego, esse não é um dois principios que você deve se importar tanto.

> Não crie uma interface robustas, crie interface menores. (tipos de objetos)

## D - Dependency inversion priciple

> Todas as classes e interfaces não devem depender da implementação.

---

OBS: Fazer a geração de id sem depender do banco de dados

entity: Entidades da aplicação, não é necessariamente tabelas do banco de dados.
repositórios: Implementação com o banco de dados.
use cases: Ações que o usuário pode fazer na aplicação.

package-by-feature: Estrutura as pastas da aplicação de acordo com as feature.

Isso tudo e para que a aplicação não depende de meios externos, ou seja, ela não sabe qual é o banco ou serviço de envio de email, ela sabe o que precisa chamar na outra de realizar cada ação.
