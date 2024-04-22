import React, { useState } from 'react';

import plus from '../../images/plus-circle.png'
import { IconCaretDown } from '@tabler/icons-react';
import { TbCaretUp } from 'react-icons/tb';
const AboutRoute = () => {
    const faqData = [
        {
            question: 'What is the capital of France?',
            answer: 'The capital of France is Paris.',
        },
        {
            question: 'How many planets are in our solar system?',
            answer: 'There are 8 planets in our solar system.',
        },
        {
            question: 'What is the tallest mountain in the world?',
            answer: 'The tallest mountain in the world is Mount Everest.',
        },
        {
            question: 'Who painted the Mona Lisa?',
            answer: 'The Mona Lisa was painted by Leonardo da Vinci.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const [expand, setExpand] = useState(Array(faqData.length).fill(false))

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
        setExpand(prev => {
            const newState = [...prev]
            newState[index] = !newState[index]
            return newState;
        }
        )
    };

    return (
        <div className="flex flex-col mx-auto pt-4">
            <p className='m-auto text-gray-950	text-2xl font-semibold py-4'>Information about the route</p>
            {faqData.map((item, index) => (
                <div key={index} className=" m-auto mb-4 pt-2 w-7/12 bg-white drop-shadow-lg">
                    <div
                        className={`flex items-center justify-between  px-4 cursor-pointer  ${activeIndex === index ? 'rounded-t-lg' : 'rounded-t-lg'
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="font-semibold py-2">{item.question}</span>
                        {expand[index]?  <TbCaretUp size={25}/> : <IconCaretDown />}
                    </div>
                    {activeIndex === index && (
                        <div className="bg-white py-2 px-4 rounded-b-lg">
                            <p className="text-gray-800 ">{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AboutRoute;