import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ProceduresActions } from '../../store/ducks/procedure';
import { Container, List, Item } from './styles';

function SelectProcedure({ getProceduresRequest, procedureState, procedures, setProcedures, cleanProcedures }) {
  const [proceduresOption, setProceduresOption] = useState([]);

  useEffect(() => {
    setProceduresOption(procedureState.procedures);
  }, [procedureState.procedures]);

  function handleAddProcedure(option) {
    if (procedures.includes(option)) {
      const newArray = procedures.filter((procedure) => procedure.id !== option.id);
      setProcedures(newArray);
    } else {
      setProcedures([...procedures, option]);
    }
    setProceduresOption([]);
  }

  function handleGetProcedure(name) {
    if (name && name.length >= 5) {
      getProceduresRequest(name);
    }

    if (name.length === 0) {
      setProceduresOption([]);
      cleanProcedures();
    }
  }

  return (
    <Container className='d-flex flex-column'>
      <label for='exampleInputPassword1'>Procedimentos</label>
      <input
        type='text'
        className='form-control'
        onChange={(e) => handleGetProcedure(e.target.value)}
        placeholder='Pesquisar...'
      />
      <List className='mb-0 list-group w-100'>
        {proceduresOption &&
          proceduresOption.length > 0 &&
          proceduresOption.map((option) => (
            <Item
              key={option.id}
              onClick={(e) => handleAddProcedure(option)}
              className={`px-3 py-2 list-group-item list-group-item-action ${
                procedures.includes(option) ? 'active' : ''
              }`}
            >
              <span>{option.name}</span>
            </Item>
          ))}
      </List>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  procedureState: state.procedure,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(ProceduresActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectProcedure);