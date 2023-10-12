// components/MultiStepForm.js
import { useState } from 'react';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (e) => {
        setAnswers({ ...answers, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className="flex justify-center">

            {step === 1 && (

                <div className='min-w-[30rem] max-w-[80%]'>
                    <h3 className='mb-4'>Prenom vôtre identité pour vous recontacter si besoin</h3>

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre prénom ?</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exemple : Julie" required />
                    </div>

                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom ?</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exemple : Lescot" required />
                    </div>


                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre numéro de téléphone ?</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+33 6 22 84 00 77" required />
                    </div>

                    {/* name="color" */}
                    <button type="submit" value={answers.color || ''} onChange={handleAnswerChange} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={nextStep}>Suivant</button>

                </div>

            )}

            {step === 2 && answers.color === 'blue' && (
                <div className='min-w-[30rem] max-w-[80%]'>
                    <h3 className='mb-4'>Prenom vôtre identité pour vous recontacter si besoin</h3>

                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre prénom ?</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exemple : Julie" required />
                    </div>

                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom ?</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exemple : Lescot" required />
                    </div>


                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre numéro de téléphone ?</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+33 6 22 84 00 77" required />
                    </div>

                    {/* name="color" */}
                    <button type="submit" value={answers.color || ''} onChange={handleAnswerChange} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={nextStep}>Suivant</button>
                    <input name="reason" onChange={handleAnswerChange} value={answers.reason || ''} />
                    <button onClick={prevStep}>Back</button>
                </div>

            )}

            {step === 2 && answers.color !== 'blue' && (
                <div className='min-w-[30rem] max-w-[80%]'>
                    <h3 className='mb-4'>Il y a t'il un danger imminent ?</h3>

                    <div class="mb-6">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre numéro de téléphone ?</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+33 6 22 84 00 77" required />
                    </div>

                    {/* name="color" */}
                    <button type="submit" value={answers.color || ''} onChange={handleAnswerChange} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={nextStep}>Suivant</button>
                    <input name="reason" onChange={handleAnswerChange} value={answers.reason || ''} />
                    <button onClick={prevStep}>Back</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h3>Summary</h3>
                    <p>Your favorite color: {answers.color}</p>
                    <p>Your reason: {answers.reason}</p>
                </div>
            )}
        </div>
    );
};

export default MultiStepForm;
