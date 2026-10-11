        {/* Empty state */}
        {!loading && !error && filteredTracks.length === 0 && (
          <div className="text-center py-20">
            <Music2 size={48} className="text-ink-700 mx-auto mb-4" />
            <p className="text-ink-400 text-lg">
              {searchQuery || activeGenre !== 'All'
                ? 'No tracks match your filters.'
                : 'No tracks yet. Check back soon for new drops!'}
            </p>
          </div>
        )}

        {/* Track grid */}
        {!loading && !error && filteredTracks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredTracks.map((track, index) => (
              <TrackCard
                key={track.id}
                track={track}
                isCurrent={currentIndex === index}
                isPlaying={isPlaying && currentIndex === index}
                onPlay={() => handlePlayTrack(index)}
                onView={() => navigate(`/track/${track.id}`)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Contact section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-flame-500 flex items-center justify-center">
              <Music2 size={18} className="text-ink-950" />
            </div>
            <span className="font-display text-xl text-ink-50 tracking-tight">YOUNG OG'S MUSIC STORE</span>
          </div>
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Young OG's Music Store. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Music Player */}
      {currentTrack && (
        <MusicPlayer
          tracks={filteredTracks}
          currentIndex={currentIndex}
          setCurrentIndex={(idx) => { setCurrentIndex(idx); setIsPlaying(true); }}
          onClose={() => { setCurrentIndex(-1); setIsPlaying(false); }}
        />
      )}
    </div>
  );
}