import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;

	input {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
	  }

	  textarea {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		box-sizing: border-box;
	  }

	  input:focus {
		outline: none;
	  }

	  input[type=button], input[type=submit], input[type=reset] {
		background-color: #214448;
		border: none;
		color: white;
		padding: 16px 32px;
		text-decoration: none;
		margin: 4px 2px;
		cursor: pointer;
	  }
`;

const Form = () => {
	const { register, formState: { errors } } = useForm();
	console.log(errors);

	return (
		<Container>
			<form method="POST" action="https://formsubmit.co/amici95@gmail.com">
				<input type="text" placeholder="Nome" {...register('Nome', { required: true, maxLength: 80 })} />
				<input type="text" placeholder="Cognome" {...register('Cognome', { required: true, maxLength: 100 })} />
				<input
					type="email"
					placeholder="Email"
					{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
				/>
				<input type="tel" placeholder="Telefono" {...register('Telefono', { required: true, maxLength: 15 })} />
				<textarea type="text" placeholder="Messaggio"  cols="40" rows="5" {...register('Messaggio', {})} />
				<input type="hidden" name="_next" value="https://www.youtube.com/watch?v=qFJvQii2QRw" />
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_subject" value="Nuova richiesta info dal sito nabuccos.com" />
				<input type="submit" />
			</form>
		</Container>
	);
};

export default Form;
