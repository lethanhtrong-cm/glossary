// File trung tâm (Hub) để gộp dữ liệu từ các module nhỏ
import { sequenceData } from './mri/dataSequence.js';
import { parameterData } from './mri/dataParameter.js';
import { physicsData } from './mri/dataPhysics.js';
import { protocolData } from './mri/dataProtocol.js';

// Gộp cả 4 mảng thành 1 mảng mriData duy nhất để xuất ra cho main.js và search.js sử dụng
export const mriData = [
    ...sequenceData, 
    ...parameterData, 
    ...physicsData,
    ...protocolData
];
