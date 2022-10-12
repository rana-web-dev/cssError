import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import QuizContent from '../quizContent/QuizContent';
import './Quiz.css';

const Quiz = () => {
    const quizData = useLoaderData();
    const itemArr = quizData.data;
    return (
        <div className='mt-10 p-3 md:p-0'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10'>
                    {
                        itemArr.map(item => <Item
                            key={item.id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

const Item = ({ item }) => {
    const {id, name, logo, total } = item;
    const router = useNavigate();
    const handleClick = () => {
        router(`/Quiz/${id}`)
    }
    return (
        <div className='w-30 rounded-md bg'>
            <div>
                <img src={logo} alt=''></img>
            </div>
            <div className='flex justify-between p-2'>
                <p>{name}</p>
                <p>Total: {total}</p>
                <button
                    onClick={handleClick}
                    className='bg-blue-500 text-white font-bold py-1 px-3 rounded-md cursor-pointer'>Quiz</button>
            </div>
        </div>
    )
}

export default Quiz;