import axios from 'axios';

import { AjaxService } from './AjaxService';

export const ajaxServiceFactory = () => new AjaxService(axios);
