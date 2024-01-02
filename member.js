function skillsMember() {
  var member = this;
  member.skills = [];
  member.addSkill = function(skill) {
    member.skills.push(skill);
  };
  member.removeSkill = function(skill) {
    var index = member.skills.indexOf(skill);
    if (index > -1) {
      member.skills.splice(index, 1);
    }
  };
  member.hasSkill = function(skill) {
    return member.skills.indexOf(skill) > -1;
  };
  member.clearSkills = function() {
    member.skills = [];
  };
  return member;
} 
