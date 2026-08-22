// File trung tâm (Hub) để gộp dữ liệu từ các module nhỏ
import { sequenceData } from './dataSequence.js';
import { parameterData } from './dataParameter.js';
import { physicsData } from './dataPhysics.js';

// Gộp cả 3 mảng thành 1 mảng mriData duy nhất để xuất ra cho main.js và search.js sử dụng
export const mriData = [
    ...sequenceData, 
    ...parameterData, 
    ...physicsData
];
