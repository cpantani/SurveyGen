import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MultipleQuestionInput from './MultipleQuestionInput';

const SurveyInput = ({ idx, question, handleQuestionChange, handleTextContentChange }) => {

    const questionID = `name-${idx}`;
    const NewTextContent = '';
    const [TextContent, setTextContent] = useState(question.content || '');

    const blankOption= { content:'', label:'' };
    const [option, setOption] = useState(question.options);

     const addOption = () => {
        setOption([...option, { ...blankOption }]);
    };

     const handleOptionChange = (e) => {
        const updateOption = [...option];
        updateOption[e.target.dataset.idx]['content'] = e.target.value;
        updateOption[e.target.dataset.idx]['label'] = e.target.dataset.idx;
        handleQuestionChange(updateOption, idx)

    };

     const handleTextChange = (e) => {

         setTextContent(e.target.value);
        handleTextContentChange(e.target.value, idx);

    };

     const getRadioQuestion = () => <div key={`question-${idx}`}>

            <label htmlFor={questionID}>{question.label}</label>

            <input
                type="button"
                value="Add another sub-question"
                onClick={addOption}
            />

            {
                option.map((val, idx) => (
                    <MultipleQuestionInput
                        key={`option-${idx}`}
                        idx={idx}
                        option={val}
                        handleOptionChange={handleOptionChange}
                    />
                ))
            }
            </div>

    const getTextQuestion = () => <div key={`question-${idx}`}>

            <label htmlFor={questionID}>{question.label}</label>
            <input
                type="text"
                name={ContentID}
                data-idx={idx}
                id={ContentID}
                className="name"
                value={TextContent}
                onChange={handleTextChange}

            />
            </div>
            const ContentID = `sub-content-${idx}`;
    return (

        <>
            { question.type === "radio" && getRadioQuestion()}
            {question.type === "text" && getTextQuestion()}
        </>

    );
};

SurveyInput.propTypes = {
    idx: PropTypes.number,
    question: PropTypes.object,
    handleQuestionChange: PropTypes.func,
};

export default SurveyInput;


