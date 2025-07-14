import {registerBlockType} from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('custom/feature-card',{
    edit: Edit,
    save,
})