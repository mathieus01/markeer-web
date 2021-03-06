import React, { useState, useRef, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as GroupActions } from '../../store/ducks/group';
import { Creators as PatientActions } from '../../store/ducks/patient';
import { Form } from '@unform/web';
import moment from 'moment';
import Util from '../../utils/util';
import InputComponent from '../InputComponent';
import Select from '../Select';
import * as Yup from 'yup';
import { Container, Title, Body, ButtonGroup } from './styles';

function CreatePatient({
  getGroupsByUserRequest,
  patient,
  stateGroup,
  savePatientRequest,
  updatePatientRequest,
  closeModal,
}) {
  const formRef = useRef(null);
  const [groups, setGroups] = useState([]);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    getGroupsByUserRequest();
    setGenders(Util.genders());
  }, [getGroupsByUserRequest]);

  useEffect(() => {
    if (!!patient) {
      const newPatient = { ...patient, birthday: moment(patient.birthday).format('YYYY-MM-DD') };
      formRef.current.setData(newPatient);
    } else {
      formRef.current.setData({});
    }
  }, [formRef, patient]);

  useEffect(() => {
    const groups = stateGroup.groups.map((group) => ({
      label: group.name,
      value: group.id,
    }));
    setGroups(groups);
  }, [stateGroup.groups]);

  async function handleValidationSubmit(data) {
    let validacao = true;
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        group_id: Yup.string().required('Selecione o grupo que deseja salva o paciente'),
        name: Yup.string().required('Informe o nome do paciente'),
        birthday: Yup.date().required('Informe a data de nascimento'),
        helthcare: Yup.string().required('Informe o plano de saude do paciente'),
        gender: Yup.string().required('Informe o genero do paciente'),
        alergy: Yup.string().required('Informe se o paciente possui alergia'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        validacao = false;
      }
    }
    console.log(validacao);
    return validacao;
  }

  async function handleSubmit(data) {
    if (!(await handleValidationSubmit(data))) {
      return;
    }

    data.birthday = Util.stringToDateAmerican(data.birthday);
    if (patient && patient.id) {
      updatePatientRequest({ ...data, id: patient.id });
    } else {
      savePatientRequest({ ...data, avatar: Math.floor(Math.random() * 5) });
    }

    closeModal(false);
  }

  return (
    <Container className='card'>
      <Title className='pb-3'>
        <h6 className='mb-0'>Novo Paciente</h6>
      </Title>
      <Form onSubmit={handleSubmit} ref={formRef} className='h-100'>
        <Body className='mt-2 overflow-auto'>
          <div class='form-group'>
            <label htmlFor='exampleInputEmail1'>Grupo</label>
            <Select options={groups} name='group_id' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Nome</label>
            <InputComponent type='text' name='name' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Data de Nascimento</label>
            <InputComponent
              type='date'
              pattern='(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})'
              name='birthday'
            />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Genero</label>
            <Select options={genders} name='gender' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Email</label>
            <InputComponent type='text' name='email' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Telefone</label>
            <InputComponent type='text' name='phone' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Endereco</label>
            <InputComponent type='text' name='address' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Profissão</label>
            <InputComponent type='text' name='occupation' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Convenio</label>
            <InputComponent type='text' name='helthcare' />
          </div>
          <div class='form-group'>
            <label htmlFor='exampleInputPassword1'>Comorbidades/Alergias</label>
            <InputComponent type='text' name='alergy' />
          </div>
        </Body>
        <ButtonGroup className='form-group d-flex justify-content-between pt-2 pt-md-3 m-0'>
          <button type='submit' class='btn btn-sm btn-primary px-3'>
            Salvar
          </button>
          <button type='button' class='btn btn-sm btn-danger' onClick={(e) => closeModal(false)}>
            Cancelar
          </button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  stateGroup: state.group,
  statePatient: state.patient,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...GroupActions, ...PatientActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreatePatient);
