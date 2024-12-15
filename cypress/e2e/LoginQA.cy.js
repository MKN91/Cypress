describe('Проверка логина и пароля QA Studio', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //открыли сайт 
         cy.get('#mail').type('german@dolnikov.ru'); // найти поле логин и ввести верный логин
         cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести верный пароль
         cy.get('#loginButton').click(); //нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка успешной авторизации и виден текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка, что крестик есть и виден пользователю
 
     })
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //открыли сайт 
        cy.get('#forgotEmailButton').click(); //нашли поле восстановить пароль и нажали
        cy.get('#mailForgot').type('german@dolnikov1.ru'); // найти поле логин и ввести email
        cy.get('#restoreEmailButton').click(); // Нажать кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Получили текст 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// проверка, что крестик есть и виден пользователю
    
    })
    it('Неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //открыли сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // найти поле логин и ввести верный логин
        cy.get('#pass').type('iLoveqastudio11'); // найти поле пароль и ввести неверный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что текст ошибки верен
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка, что крестик есть и виден пользователю
    
    })
    it('Неправильный логин', function () {
        cy.visit('https://login.qa.studio/'); //открыли сайт 
        cy.get('#mail').type('german@dolnikov1.ru'); // найти поле логин и ввести неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка, что текст ошибки верен
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка, что крестик есть и виден пользователю
    
    })
    it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); //открыли сайт 
        cy.get('#mail').type('germandolnikov.ru'); // найти поле логин и ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка, что текст ошибки верен
    
    })
    it('Проверка строчных букв в логине', function () {
        cy.visit('https://login.qa.studio/'); //открыли сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // найти поле логин и ввести верный логин
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); //нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка успешной авторизации и виден текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка, что крестик есть и виден пользователю

    })
 })
 

 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 