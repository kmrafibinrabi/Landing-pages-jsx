import React, { useState } from 'react';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Faq = () => {
    const faqData = [
        {
            id: 1,
            question: 'What programs does East West University offer?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
        {
            id: 2,
            question: 'What are the admission requirements?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
        {
            id: 3,
            question: 'What is the tuition fee structure?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
        {
            id: 4,
            question: 'Does EWU offer scholarships or financial aid?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
        {
            id: 5,
            question: 'What are the campus facilities like?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
        {
            id: 6,
            question: 'How can I apply for admission?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
        {
            id: 7,
            question: 'Does EWU have on-campus accommodation?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
        {
            id: 8,
            question: 'What extracurricular activities are available at EWU?',
            answer: 'EWU offers undergraduate, graduate, and postgraduate programs across various disciplines like Business, Engineering, and Arts.',
        },
    ];

    const [activeFaq, setActiveFaq] = useState(1);

    const handleToggleFaq = (id) => {
        setActiveFaq(activeFaq === id ? null : id); // Toggle the active FAQ
    };

    return (
        <section className="py-[130px] w-full max-w-[844px] mx-auto px-4">

            <h2 className="text-center font-bold text-[40px] md:text-[60px] text-primary mb-[50px]">FAQ</h2>

            <div className="content">
                {faqData.map((faq, index) => (
                    <div key={faq.id} className={`text-accent gap-[30px] flex flex-col mb-[30px] pb-[30px] ${faqData.length - 1 === index ? '' : 'border-b'} border-b-accent`}>
                        <div
                            onClick={() => handleToggleFaq(faq.id)} // Use a function to toggle
                            className="flex justify-between text-[20px] md:text-[25px] font-bold cursor-pointer"
                        >
                            <h3>{faq.question}</h3>
                            <FontAwesomeIcon
                                className={`cursor-pointer transition-transform duration-300 ${faq.id === activeFaq ? 'text-primary' : ''}`}
                                icon={faq.id === activeFaq ? faMinusCircle : faPlusCircle} // Conditional rendering for icons
                            />
                        </div>

                        {faq.id === activeFaq && (
                            <div className="text-[16px] md:text-[20px] font-normal leading-loose text-[#586C84]">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
