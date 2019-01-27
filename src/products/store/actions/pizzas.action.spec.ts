import * as fromPizzas from './pizzas.action';
import { Pizza } from '../../models/pizza.model';

describe('Pizzas Actions', () => {

  describe('LoadPizzas Action', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const payload: Pizza[] = [
          {
            "name": "Main Pizza",
            "toppings": [
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 2,
                "name": "bacon"
              }
            ],
            "id": 9
          }
        ];
        const action = new fromPizzas.LoadPizzas();
        action.payload = payload;
        
        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS,
          payload
        });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = {message: 'Load Error'};
        const action = new fromPizzas.LoadPizzasFail(payload);

        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload
        });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            "name": "Main Pizza",
            "toppings": [
              {
                "id": 6,
                "name": "mushroom"
              },
              {
                "id": 2,
                "name": "bacon"
              }
            ],
            "id": 9
          }
        ];
        const action = new fromPizzas.LoadPizzasSuccess(payload);

        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload
        });
      });
    });

  });
});
