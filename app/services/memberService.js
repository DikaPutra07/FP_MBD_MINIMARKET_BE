const memberRepository = require('../repositories/memberRepository');

const getAllMember = async () => {
    try {
        const data = await memberRepository.getAllMember();
        return data;
    }
    catch (error) {
        throw error;
    }
}

const getMemberById = async (id) => {
    try {
        const data = await memberRepository.getMemberById(id);
        return data;
    }
    catch (error) {
        throw error;
    }
}

const createMember = async (data) => {
    try {
        const created = await memberRepository.createMember(data);
        return created;
    }
    catch (error) {
        throw error;
    }    
}

const updateMember = async (data, id) => {
    try {
        const updated = await memberRepository.updateMember(data, id);
        return updated;
    }
    catch (error) {
        throw error;
    }    
}

const deleteMember = async (id) => {
    try {
        const deleted = await memberRepository.deleteMember(id);
        return deleted;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllMember,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
}