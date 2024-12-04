# Projeto BarberShop

## Descrição

O **BarberShop** é um aplicativo desenvolvido para facilitar a conexão entre barbeiros e clientes, permitindo que os clientes agendem cortes de cabelo de forma rápida e prática. A plataforma oferece uma maneira eficiente de agendar horários, selecionar serviços e fazer o acompanhamento dos agendamentos diretamente pelo celular.

Com esse aplicativo, os barbeiros podem gerenciar sua agenda e os clientes podem escolher os melhores horários para realizar seus cortes, proporcionando uma experiência mais organizada e conveniente.

## Funcionalidades

- **Cadastro de Barbeiros**: Barbeiros podem se cadastrar no aplicativo e criar um perfil, incluindo informações como nome, especialidade e fotos de cortes realizados.
- **Cadastro de Clientes**: Clientes podem se cadastrar e criar um perfil para realizar agendamentos de serviços.
- **Agendamento de Cortes**: Os clientes podem selecionar o tipo de corte que desejam e agendar horários diretamente no perfil do barbeiro.
- **Gerenciamento de Agenda**: Os barbeiros podem visualizar seus horários disponíveis, gerenciar os agendamentos e confirmar ou alterar os horários.
- **Notificações de Lembrete**: O aplicativo envia lembretes para os clientes e barbeiros antes do horário agendado.
- **Histórico de Agendamentos**: Os clientes podem ver os cortes anteriores e seus horários de agendamento passados.

## Tecnologias Utilizadas

- **React Native**: Framework utilizado para o desenvolvimento do aplicativo, proporcionando uma experiência nativa tanto no Android quanto no iOS.
- **Firebase**: Utilizado para autenticação de usuários (clientes e barbeiros), gerenciamento de banco de dados (Firestore) e notificações push.
- **React Navigation**: Biblioteca utilizada para gerenciar a navegação dentro do aplicativo.
- **React Hook Form**: Para criação e validação de formulários de maneira eficiente.
- **Zod**: Biblioteca de validação de dados, integrada ao `react-hook-form` para garantir que as entradas de dados sejam válidas.
- **MMKV**: Para o armazenamento local de dados persistentes.

## Como Rodar o Projeto

### 1. Clonar o Repositório

Primeiramente, clone o repositório para o seu computador:

```bash
git clone https://github.com/DanielVieiraFernandes/BarberShop-App.git
```
### 2. Baixar as Dependências

acesse a pasta do seu projeto e instale as dependências:

```bash
cd nome do projeto
npm install
```

### 3. Configurar o Firebase

entre no Firebase console e crie um projeto

depois entre no [React Native Firebase](https://rnfirebase.io/) e siga a documentação para configurar o projeto.



