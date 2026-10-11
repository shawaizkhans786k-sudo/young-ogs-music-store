import { supabase } from '../lib/supabase';
import { Music } from 'lucide-react';
import React, { useState } from 'react';

export default function Dashboard({ recentTracks, setForm, INITIAL_FORM, removeCoverArt, removeAudio, setFieldErrors, setError, fetchTracks }: any) {
  return (
    <div className="p-6 bg-ink-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                setForm(INITIAL_FORM);
                removeCoverArt();
                removeAudio();
                setFieldErrors({});
                setError(null);
              }}
              className="text-sm text-ink-400 hover:text-ink-200 font-semibold transition-colors"
            >
              Reset Form
            </button>
          </div>
        </form>

        {/* Recent tracks */}
        {recentTracks && recentTracks.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl text-ink-50 tracking-tight mb-4">
              RECENTLY ADDED
            </h2>
            <div className="space-y-2">
              {recentTracks.map((track: any) => (
                <div
                  key={track.id}
                  className="flex items-center gap-3 bg-ink-800/60 border border-ink-700/50 rounded-xl p-3 hover:bg-ink-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-ink-700">
                    {track.cover_art_url ? (
                      <img src={track.cover_art_url} alt={track.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-flame-600 to-ink-700 flex items-center justify-center">
                        <Music size={16} className="text-ink-300" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink-100 truncate">{track.title}</p>
                    <p className="text-xs text-ink-400 truncate">{track.artist} · {track.genre}</p>
                  </div>
                  
                  <span className="text-sm font-mono text-gold-400 flex-shrink-0 mr-2">
                    ${track.price ? track.price.toFixed(2) : '0.00'}
                  </span>
                  
                  {track.preview_audio_url ? (
                    <span className="text-[10px] font-mono text-success-500 bg-success-500/10 px-2 py-1 rounded flex-shrink-0 mr-2">
                      AUDIO
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-ink-500 bg-ink-700 px-2 py-1 rounded flex-shrink-0 mr-2">
                      NO AUDIO
                    </span>
                  )}

                  {/* Edit aur Delete ke Buttons aur Logic */}
                  <div className="flex gap-2 ml-auto flex-shrink-0">
                    <button 
                      type="button"
                      onClick={async () => {
                        const newTitle = window.prompt("Naya Track Title likhein:", track.title);
                        if (newTitle === null) return;
                        const newPriceStr = window.prompt("Nayi Price ($) likhein:", track.price ? track.price.toString() : "0");
                        if (newPriceStr === null) return;
                        const newPrice = parseFloat(newPriceStr);
                        if (isNaN(newPrice)) return alert("Sahi price likhein!");
                        
                        try {
                          const { error } = await supabase.from('tracks').update({ title: newTitle, price: newPrice }).eq('id', track.id);
                          if (error) throw error;
                          alert("Track details update ho gayin!");
                          if (fetchTracks) fetchTracks();
                          else window.location.reload();
                        } catch (err: any) { alert("Error: " + err.message); }
                      }}
                      className="text-blue-500 hover:text-blue-400 p-2 font-medium text-sm transition-colors"
                    >
                      Edit
                    </button>

                    <button 
                      type="button"
                      onClick={async () => {
                        if (!window.confirm("Kya aap is track ko delete karna chahte hain?")) return;
                        try {
                          const { error } = await supabase.from('tracks').delete().eq('id', track.id);
                          if (error) throw error;
                          alert("Track successfully delete ho gaya!");
                          if (fetchTracks) fetchTracks();
                          else window.location.reload();
                        } catch (err: any) { alert("Error: " + err.message); }
                      }}
                      className="text-red-500 hover:text-red-400 p-2 font-medium text-sm transition-colors"
                    >
                      Delete
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
