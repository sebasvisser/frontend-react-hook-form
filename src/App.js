import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({mode: "onBlur"});

    function onSubmit(data){
        console.log(data);
    }
    const chosenFreq = watch('bezorgfrequentie');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Voornaam:
                <input type="text" placeholder="Voornaam"
                       {...register("voornaam",
                           {required: "Voornaam mag niet leeg zijn"})}
                    onBlur={handleSubmit}
                />
            </label>
            {errors.voornaam && <p>{errors.voornaam.message}</p>}


            <label>
                Achternaam:
                <input type="text" placeholder="Achternaam"
                       {...register("achternaam",
                           {required: "Achternaam mag niet leeg zijn"})}
                />
            </label>
            {errors.achternaam && <p>{errors.achternaam.message}</p>}


            <label>
                Leeftijd:
                <input type="number" placeholder="Leeftijd"
                       {...register(
                           "leeftijd",
                           {required: true,
                               min: {
                                   value: 18,
                                   message: "Minimaal 18 jaar oud.",
                               }
                           })}
                />
            </label>
            {errors.leeftijd && <p>{errors.leeftijd.message}</p>}

            <label>
                Postcode:
                <input type="text" placeholder="Postcode"
                       {...register(
                           "postcode",
                           {required: "Postcode mag niet leeg zijn",
                               minLength: {
                               value: 6,
                               message: "Postcode bestaat uit minimaal 6 tekens",
                               },
                               maxLength: {
                               value: 6,
                               message: "Postcode bestaat uit maximaal 6 tekens",
                               },
                               pattern: {
                               value: /[0-9]{4}[a-z-A-Z]{2}/i ,
                               message: "Postcode patroon: getal-getal-getal-getal-letter-letter",
                               }
                                   })}
                />
            </label>
            {errors.postcode && <p>{errors.postcode.message}</p>}

            <label>
                Bezorgfrequentie:
                <select {...register("bezorgfrequentie", { required: true })}>
                    <option value="iedere week">Iedere week</option>
                    <option value="om de week">Om de week</option>
                    <option value="iedere maand">Iedere maand</option>
                    <option value="anders">Anders</option>
                </select>
            </label>
            {errors.bezorgfrequentie && <p>{errors.bezorgfrequentie.message}</p>}

            { chosenFreq === 'anders' && (
                <label>
                    Voer een andere frequentie in:
                    <input type="text" placeholder="Andere frequentie"
                           {...register("anders", {})} />
                </label>
            )}

            <label>
                Opmerkingen:
                <textarea
                    {...register("opmerkingen", {})} />
            </label>

            <label>
                Akkoord met de voorwaarden?
                <input type="checkbox" placeholder="Akkoord?"
                       {...register(
                           "akkoord",
                           {required: "Geen feestje zonder voorwaarden"}
                       )}
                />
            </label>
            {errors.akkoord && <p>{errors.akkoord.message}</p>}


            <input type="submit" />
        </form>
    );
}