import { createRenderer } from 'fela';
import React, { FC } from 'react';
import { RendererProvider } from 'react-fela';

const renderer = createRenderer();

export const FelaProvider: FC = ({ children }) => (
    <RendererProvider renderer={renderer}>{children}</RendererProvider>
);
