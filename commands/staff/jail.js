const { User, Role, ReactionUserManager } = require("discord.js");

module.exports = {
    name: 'jail',
    description: 'Banishes a user to the horny gulag',
    execute(message, args) {
        const mutedRole = "754154227730743337";
        const smallEpicGamerRole = "738215330027143189";
        const epicGamerRole = "738470317001015386";
        const bigEpicGamerRole = "738215400545976331";
        const epicGamerBroskisRole = "738470506465853520";
        const roles = ["738215330027143189", "738470317001015386", "738215400545976331", "738470506465853520"];
        const {member, mentions} = message;
        
        const target = message.mentions.users.first();
        let targetMember = message.guild.members.cache.get(target.id);
        let targetMemberRoles = targetMember._roles;

        if (targetMemberRoles.includes(mutedRole)) {
            targetMember.roles.remove(mutedRole);
            targetMember.roles.add(smallEpicGamerRole);

            message.reply(`${target.name} has been successfully unmuted!`);
        } else {
            targetMember.roles.remove(smallEpicGamerRole);
            targetMember.roles.remove(epicGamerRole);
            targetMember.roles.remove(bigEpicGamerRole);
            targetMember.roles.remove(epicGamerBroskisRole);
            targetMember.roles.add(mutedRole);

            message.reply(`${target.name} has been successfully muted!`);
        }
    }
}