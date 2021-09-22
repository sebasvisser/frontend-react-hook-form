import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const chosenFreq = watch('Bezorgfrequentie');


    console.log(errors);



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Voornaam"
                   {...register("voornaam",
                       {required: true})}
            />
            <input type="text" placeholder="Achternaam"
                   {...register("achternaam",
                       {required: true})}
            />
            <input type="number" placeholder="Leeftijd"
                   {...register("leeftijd",
                       {required: true,
                           min: {
                               value: 18,
                               message: "Er mogen maximaal 50 karakters gebruikt worden",
                           },
                           })}
            />
            {errors.leeftijd && <p>{errors.leeftijd.message}</p>}

            <input type="text" placeholder="Postcode"
                   {...register("postcode", {required: true, maxLength: 6, pattern: /[0-9]{4}[a-z-A-Z]{2}/i})}
            />
            <select {...register("bezorgfrequentie", { required: true })}>
                <option value="Iedere week">Iedere week</option>
                <option value="Om de week">Om de week</option>
                <option value="Iedere maand">Iedere maand</option>
                <option value="Anders">Anders</option>

            </select>
            { chosenFreq === 'anders' && (
            <input type="text" placeholder="Andere frequentie" {...register("andere frequentie", {})} />
            )}
            <textarea {...register("opmerkingen", {})} />
            <input type="checkbox" placeholder="Akkoord?" {...register("akkoord?", {required: true})} />

            <input type="submit" />
        </form>
    );
}