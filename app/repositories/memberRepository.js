const { Member } = require('../models');

const getAllMember = async () => {
    return Member.findAll();
}

const getMemberById = async (id) => {
    return Member.findOne({
        where: {
            id: id
        }
    });
}

const createMember = async (data) => {
    return Member.create(data);
}

const updateMember = async (data, id) => {
    return Member.update(data, {
        where: {
            id: id
        }
    });
}

const deleteMember = async (id) => {
    return Member.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllMember,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
}