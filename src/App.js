import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Voornaam" {...register("Voornaam", {required: true})} />
            <input type="text" placeholder="Achternaam" {...register("Achternaam", {required: true})} />
            <input type="number" placeholder="Leeftijd" {...register("Leeftijd", {required: true, min: 18})} />
            <input type="text" placeholder="Postcode" {...register("Postcode", {required: true, maxLength: 6, pattern: /[0-9]{4}[a-z-A-Z]{2}/i})} />
            <select {...register("Bezorgfrequentie", { required: true })}>
                <option value="Iedere week">Iedere week</option>
                <option value=" Om de week"> Om de week</option>
                <option value=" Iedere maand, Anders"> Iedere maand, Anders</option>
            </select>
            <input type="text" placeholder="Andere frequentie" {...register("Andere frequentie", {})} />
            <textarea {...register("Opmerkingen", {})} />
            <input type="checkbox" placeholder="Akkoord?" {...register("Akkoord?", {required: true})} />

            <input type="submit" />
        </form>
    );
}