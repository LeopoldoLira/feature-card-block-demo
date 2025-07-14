import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, InspectorControls , URLInput } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';


export default function Edit ({attributes, setAttributes}){
   const blockProps = useBlockProps({className: 'feature-card'}); 
   const { title, description, imageUrl, buttonText, buttonUrl} = attributes;


   return(
    <>
        <InspectorControls>
            <PanelBody title='Button Settings'>
                <TextControl 
                    label = 'Button URL'
                    value = {buttonUrl}
                    onChange={(value)=> setAttributes({buttonUrl:value})}
                />
            </PanelBody>
        </InspectorControls>

        <div {...blockProps}>
            <MediaUpload 
                onSelect={(media) => setAttributes({imageUrl:media.url})}
                type='image'
                render={({open}) => (
                    <Button onClick={open} variant='secondary'>
                        {imageUrl ? 'Change Image' : 'Upload Image'}
                    </Button>
                )}
            />
            {imageUrl && <img src={imageUrl} alt='Feature Icon' className='feature-icon' />}

            <RichText 
                tagName='h3'
                value={title}
                onChange={(value)=> setAttributes({title:value})}
                placeholder='Add Title...'
                clasName='feature-title'
            />

            <RichText 
                tagName='p'
                value={description}
                onChange={(value) => setAttributes({description:value})}
                placeholder='Add description...'
                className='feature-description'
            />

            <RichText 
                tagName='a'
                value={buttonText}
                onChange={(value) => setAttributes({buttonText:value})}
                placeholder='Button Text'
                className='feature-button'
            />
        </div>
    </>
   )
}