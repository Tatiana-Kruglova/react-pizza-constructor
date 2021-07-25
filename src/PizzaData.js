export const COMPONENT_INCREASE = 29;
export const SIZE_INCREASE = 50;
export const DEFAULT_PRICE = 200;
export const SIZE_NAME = 'size';
export const SAUCE_NAME = 'sauce';
export const DOUGH_NAME = 'dough';
export const CHEESE_NAME = 'cheese';
export const VEGETABLES_NAME = 'vegetables';
export const MEAT_NAME = 'meat';

export const PizzaData =
    {
    size: {
        type: 0,
        values: [{id: 0, checked: true, name: '30 см', groupName: SIZE_NAME, increase: 0},
            {id: 1, checked: false, name: '35 см', groupName: SIZE_NAME, increase: SIZE_INCREASE}]
    },
    dough: {
        type: 0,
        values: [{id: 0, checked: true, name: 'Тонкое', description: 'на тонком тесте', groupName: DOUGH_NAME, increase: 0},
            {id: 1, checked: false, name: 'Пышное', description: 'на пышном тесте', groupName: DOUGH_NAME, increase: 0}]
    },
    sauce: {
        type: 0,
        values: [{id: 0, checked: true, name: 'Томатный', groupName: SAUCE_NAME, increase: 0, description: 'Томатный соус'},
            {id: 1, checked: false, name: 'Белый', groupName: SAUCE_NAME, increase: 0, description: 'Белый соус'},
            {id: 2, checked: false, name: 'Острый', groupName: SAUCE_NAME, increase: 0, description: 'Острый соус'}]
    },
    cheese: {
        type: 1,
        values: [{id: 0, checked: false, name: 'Моцарелла', increase: COMPONENT_INCREASE},
            {id: 1, checked: false, name: 'Чеддер', increase: COMPONENT_INCREASE},
            {id: 2, checked: false, name: 'Дор Блю', increase: COMPONENT_INCREASE}]
    },
    vegetables: {
        type: 1,
        values: [{id: 0, checked: false, name: 'Помидор', increase: COMPONENT_INCREASE},
            {id: 1, checked: false, name: 'Грибы', increase: COMPONENT_INCREASE},
            {id: 2, checked: false, name: 'Перец', increase: COMPONENT_INCREASE}]
    },
    meat: {
        type: 1,
        values: [{id: 0, checked: false, name: 'Бекон', increase: COMPONENT_INCREASE},
            {id: 1, checked: false, name: 'Пепперони', increase: COMPONENT_INCREASE},
            {id: 2, checked: false, name: 'Ветчина', increase: COMPONENT_INCREASE}]
    }
}
