import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({attributes}){
    const {title, description, imageUrl, buttonText, buttonUrl} = attributes;
    return(
        <div {...useBlockProps.save({className:'feature-card'})}>
        {imageUrl && <img src={imageUrl} alt='Feature icon' className='feature-icon' />}
        <RichText.Content tagName='h3' value={title} className='feature-title' />
        <RichText.Content tagname='p' value={description} className='feature-description' />
        {buttonText && (
            <a href={buttonUrl} className='feature-button'>
            {buttonText}
            </a>
        )}
    </div>
    );
}