import React, {Component} from "react";
import Aux from '../../hoc/Auxillary';
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>BurgerControls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;