/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://recipeal.netlify.app/');
    cy.xpath('/html/body/div/div/div[6]/button[2]').click();
  });
  
  it('create', ()=>{
    cy.xpath('//*[@id="create-recipe-btn"]').click();
    cy.wait(500);
    
    cy.get('input#input-name').type('myfood');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.get('input#input-tags1').type('1st tag');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    // check if element is being saved
    cy.get('recipe-card#myfood').should('exist');
  });

  


});


describe('create one sample recipe', ()=>{
  beforeEach(() => {
    cy.visit('https://recipeal.netlify.app/');

    cy.xpath('/html/body/div/div/div[6]/button[2]').click();
    cy.get('button#create-recipe-btn').click();
    cy.wait(500);
    
    cy.get('input#input-name').type('myfood');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
  });

  it('more tag', ()=>{

    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click(); 
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.get('input#input-tags1').type('1st tag');
    cy.get('input#input-tags2').type('2nd tag');
    cy.get('input#input-tags3').type('3rd tag');
    cy.get('input#input-tags4').type('4th tag');
    cy.get('input#input-tags5').type('5th tag');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    
    //cy.get('recipe-card#myfood').children('div#')

  });

  it('more step', ()=>{
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps2').type('2nd steps');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps3').type('3rd steps');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps4').type('4th steps');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps5').type('5th steps');

    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
  });

  it('more ing', ()=>{
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings2').type('2nd ings');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings3').type('3rd ings');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings4').type('4th ings');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings5').type('5th ings');

    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    
  });
  it('add nutriton', ()=>{
    cy.xpath('//*[@id="input-calories"]').type('100');
    cy.xpath('//*[@id="input-carbs"]').type('100');
    cy.xpath('//*[@id="input-fat"]').type('100');
    cy.xpath('//*[@id="input-protein"]').type('100');
  });
});



describe('delete recipe', ()=>{
  beforeEach(() => {
    cy.visit('https://recipeal.netlify.app/');

    cy.xpath('/html/body/div/div/div[6]/button[2]').click();
    cy.get('button#create-recipe-btn').click();
    cy.wait(500);
    
    cy.get('input#input-name').type('myfood');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    // check if element is being saved
    cy.get('recipe-card#myfood').should('exist');

    cy.get('button#create-recipe-btn').click();
    cy.get('input#input-name').type('myfood-delete');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    cy.get('recipe-card#myfood-delete').should('exist');
  });

  it('delete first', ()=>{
    cy.xpath('//*[@id="delete-btn"]').click();
    cy.get('recipe-card#myfood') 
      .shadow() 
       .find('article')
          .find('button#cardDelete') 
            .click()
  });

  it('delete second', ()=>{
    cy.xpath('//*[@id="delete-btn"]').click();
    cy.get('recipe-card#myfood-delete') 
            .shadow() 
            .find('article')
            .find('button#cardDelete') 
            .click()
  });
});


describe('update recipe', ()=>{
  beforeEach(() => {
    cy.visit('https://recipeal.netlify.app/');

    cy.xpath('/html/body/div/div/div[6]/button[2]').click();
    cy.get('button#create-recipe-btn').click();
    cy.wait(500);
    
    cy.get('input#input-name').type('myfood');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    // check if element is being saved
    cy.get('recipe-card#myfood').should('exist');

    cy.get('button#create-recipe-btn').click();
    cy.get('input#input-name').type('myfood-delete');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    cy.get('recipe-card#myfood-delete').should('exist');
  });

  it('edit title', ()=>{
    cy.get('recipe-card#myfood').click();
    cy.xpath('//*[@id="edit-btn"]').click();   
    cy.get('input#input-name').type('myfood-changed');
    cy.xpath('//*[@id="save-edit-btn"]').click();
  });

  it('edit desc', ()=>{
    cy.get('recipe-card#myfood-delete').click();
    cy.xpath('//*[@id="edit-btn"]').click();
    cy.get('textarea#input-desc').type('change some des for recipe 2');
    cy.xpath('//*[@id="save-edit-btn"]').click();
  });

  it('edit time', ()=>{
    cy.get('recipe-card#myfood-delete').click();
    cy.xpath('//*[@id="edit-btn"]').click();
    cy.get('input#input-hours').clear();
    cy.get('input#input-hours').type('10');
    cy.get('input#input-mins').clear();
    cy.get('input#input-mins').type('20');
    cy.xpath('//*[@id="save-edit-btn"]').click();
  });
});

describe('filter recipe', ()=>{
  beforeEach(() => {
    cy.visit('https://recipeal.netlify.app/');

    cy.xpath('/html/body/div/div/div[6]/button[2]').click();
    cy.get('button#create-recipe-btn').click();
    cy.wait(500);
    
    cy.get('input#input-name').type('myfood');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');

    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.get('input#input-tags1').type('lunch');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    
    cy.get('button#return-btn').click();
    // check if element is being saved
    cy.get('recipe-card#myfood').should('exist');

    cy.get('button#create-recipe-btn').click();
    cy.get('input#input-name').type('myfood2');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');

    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.get('input#input-tags1').type('lunch');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    cy.get('recipe-card#myfood2').should('exist');


    cy.get('button#create-recipe-btn').click();
    cy.get('input#input-name').type('myfood3');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');

    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.get('input#input-tags1').type('dinner');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    cy.get('recipe-card#myfood3').should('exist');

    cy.get('button#create-recipe-btn').click();
    cy.get('input#input-name').type('myfood4');
    cy.get('textarea#input-desc').type('this is some desc');
    cy.get('input#input-hours').type('1');
    cy.get('input#input-mins').type('30');
    cy.xpath('//*[@id="ing-card"]/button').click();
    cy.get('input#input-ings1').type('1st ings');
    cy.xpath('//*[@id="step-card"]/button').click();
    cy.get('input#input-steps1').type('1st steps');

    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[1]/div[6]/button').click();
    cy.get('input#input-tags1').type('dinner');
    cy.xpath('//*[@id="create-recipe--input-wrapper"]/div[3]/button[1]').click();
    cy.get('button#return-btn').click();
    cy.get('recipe-card#myfood4').should('exist');
  });

  it("4 recipes", ()=>{
    cy.get('recipe-card#myfood').click();
    cy.xpath('//*[@id="edit-btn"]').click();
  })

});