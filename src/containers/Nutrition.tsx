import Nutrition from '../components/Nutrition';
import * as actions from '../actions';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ nutritions }: StoreState) {
  return {
    nutritions
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.NutritionAction>) {
  return {
    getNutritions: () => dispatch(actions.getNutritions()),
    addNutrition: () => dispatch(actions.addNutrition())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nutrition);