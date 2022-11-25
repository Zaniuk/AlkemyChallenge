
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import TypeSelector from './TypeSelector';
import httpService from '../../services/httpService';
function CreateForm() {
  const validationSchema = yup.object({
    amount: yup.number().required('Amount is required'),
    concept: yup.string().required('concept is required'),
    type: yup.string().required('Type is required'),
    date: yup.date().max(new Date(), 'La fecha no puede ser posterior a la de hoy').required('Date is required'),
  });

  const formik = useFormik({
    initialValues: {
      amount: 0,
      concept: '',
      type: '',
      date: new Date().toISOString().slice(0, 10),
    }, validationSchema, onSubmit: async (values) => {
      values.amount = Number(values.amount);
      const res = await httpService.post('/operations', values);
      console.log(res);
    }
    });
  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: 'auto',
      }}

    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Amount"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
        />
        <TypeSelector
          id="type"
          name="type"
          label="Type"
          value={formik.values.type}
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          
        />

        <TextField
          fullWidth
          id="date"
          name="date"
          label="Date"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>

      </form>
    </Box>
  )
}

export default CreateForm