public class Solution {
    /*public boolean isIsomorphic(String s, String t) {
        if (s == null && t == null) return true;
        if (s == null || t == null) return false;
        if(s.length() != t.length()) return false;
        if (s.length() == 0 && t.length() == 0) return true;
        Map<Character, Character> map = new HashMap();
        for (int i=0; i<s.length();i++)
        {
            char cs = s.charAt(i);
            char ct = t.charAt(i);
            
            if (map.containsKey(cs))
            {
                if(map.get(cs) != ct) return false;
            }
            map.put(cs, ct);
        }
        map = new HashMap();
        for (int i=0; i<s.length();i++)
        {
            char cs = s.charAt(i);
            char ct = t.charAt(i);
            
            if (map.containsKey(ct))
            {
                if(map.get(ct) != cs) return false;
            }
            map.put(ct, cs);
        }
        return true;
    }*/
    public boolean isIsomorphic(String s, String t) {
        int sStore [] = new int[256];
        int tStore [] = new int[256];
        for (int i=0;i<s.length();i++)
        {
            char cs = s.charAt(i);
            char ct = t.charAt(i);
            
            if(sStore[cs] != tStore[ct]) return false;
            
            sStore[cs] = i+1; //+1 because by default val of array is 0, we want to ensure letters at 0th index are recorded
            tStore[ct] = i+1;
            
        }
        return true;
    }
}