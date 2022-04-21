const recipes = [
    { recipe_name: 'Spaghetti Bolognese' }
]

const ingredients = [
    { ingredient_name: 'olive oil', ingredient_unit: 'g' }
]

const steps = [
    { step_text: 'Put a large saucepan on a medium heat', step_number: 1, recipe_id: 1 }
]

const step_ingredients = [
    { ingredient_name: 'olive oil', ingredient_unit: 'g' }
]

exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}