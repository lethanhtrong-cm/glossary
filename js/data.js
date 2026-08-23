// File trung tâm (Hub) để gộp dữ liệu từ các module nhỏ
import { sequenceData } from './dataSequence.js';
import { parameterData } from './dataParameter.js';
import { physicsData } from './dataPhysics.js';
import { protocolData } from './dataProtocol.js'; // THÊM DÒNG NÀY

// Gộp cả 4 mảng thành 1 mảng mriData duy nhất
export const mriData = [
    ...sequenceData, 
    ...parameterData, 
    ...physicsData,
    ...protocolData // THÊM DÒNG NÀY
];
