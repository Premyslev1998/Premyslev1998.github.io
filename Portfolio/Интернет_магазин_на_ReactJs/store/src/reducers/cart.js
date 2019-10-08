const initialState = {
	items: [],
	/*items: [ //У редюсера корзины аналогично создаем массив items
		{
			"id": 0,
			"title": "Происхождение",
			"author": "Дэн Браун",
			"image":
				"https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
			"price": 710,
			"rating": 3
		},
		{
			"id": 0,
			"title": "Происхождение",
			"author": "Дэн Браун",
			"image":
				"https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
			"price": 710,
			"rating": 3
		},
		{
			"id": 0,
			"title": "Происхождение",
			"author": "Дэн Браун",
			"image":
				"https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
			"price": 710,
			"rating": 3
		}
	]*/	
};

export default (state = initialState, action) => { 

	switch (action.type){ 
		case 'ADD_TO_CART': 
			return{ 
					...state,
					items: [
						...state.items,
						action.payload
					],
				};
		case 'REMOVE_FROM_CART': 
			return{ 
				...state, 
				items: state.items.filter(o => o.id != action.payload)
			};


			break;
		default:
			return state;			
	}

};