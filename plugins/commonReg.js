/**
* һЩͨ�õ�������ʽ��
*/

var stringRegStr = "(?:" +
    "\"(?:[^\\\\\"\\r\\n\\f]|\\\\[\\s\\S])*\"" + //ƥ����"Ϊ�綨�����ַ���
    "|" +
    "\'(?:[^\\\\\'\\r\\n\\f]|\\\\[\\s\\S])*\'" + //ƥ����'Ϊ�綨�����ַ���
    ")",
    jscommentRegStr = "(?:" +
    "\\/\\/[^\\r\\n\\f]*" + // ƥ�䵥��ע��
    "|" +
    "\\/\\*[\\s\\S]+?\\*\\/" + //ƥ�����ע��
    ")",
    jsStringArrayRegStr = "(?:" +
    "\\[\\s*" + stringRegStr + "(?:\\s*,\\s*" + stringRegStr + ")*\\s*\\]" + //ƥ��ǿ��ַ�������
    ")";

exports.stringRegStr = stringRegStr;
exports.jscommentRegStr = jscommentRegStr;
exports.jsStringArrayRegStr = jsStringArrayRegStr;
