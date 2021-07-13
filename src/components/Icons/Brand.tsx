import React from 'react';
import { ReactComponent as BrandIcon } from '../../assets/images/brand.svg';

type BrandProps = {
    width?: string;
    height?: string;
};

const Brand: React.FC<BrandProps> = ({ width = '100%', height = '100%' }) => {
    return <BrandIcon style={{ width, height }} />;
};

export default Brand;
