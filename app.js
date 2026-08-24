async function loadTrackerData() {
    try {
        const response = await fetch('tracker-data.json');
        if (!response.ok) throw new Error('Data file not found');
        
        const data = await response.json();
        displayTrackerData(data);
    } catch (error) {
        console.error('Error loading tracker data:', error);
        showError();
    }
}

function displayTrackerData(data) {
    const contentSection = document.getElementById('content');
    const loadingState = document.getElementById('loadingState');
    const trackerData = document.getElementById('trackerData');
    
    trackerData.innerHTML = '';
    
    if (data.sections && Array.isArray(data.sections)) {
        data.sections.forEach(section => {
            const sectionEl = createSectionElement(section);
            trackerData.appendChild(sectionEl);
        });
    }
    
    // Update timestamps
    if (data.timestamp) {
        document.getElementById('lastUpdated').textContent = formatDate(data.timestamp);
        document.getElementById('refreshTime').textContent = formatDateTime(data.timestamp);
    }
    
    loadingState.style.display = 'none';
    contentSection.style.display = 'block';
}

function createSectionElement(section) {
    const div = document.createElement('div');
    div.className = 'section';
    
    let html = `<h2>${escapeHtml(section.title)}</h2>`;
    
    if (section.summary) {
        html += `<p>${escapeHtml(section.summary)}</p>`;
    }
    
    if (section.items && Array.isArray(section.items)) {
        section.items.forEach(item => {
            html += `<div>`;
            if (item.title) {
                html += `<h3>${escapeHtml(item.title)}</h3>`;
            }
            if (item.description) {
                html += `<p>${escapeHtml(item.description)}</p>`;
            }
            if (item.details) {
                html += `<p>${escapeHtml(item.details)}</p>`;
            }
            if (item.tags && Array.isArray(item.tags)) {
                item.tags.forEach(tag => {
                    const tagClass = tag.toLowerCase().includes('policy') ? 'policy' : 
                                   tag.toLowerCase().includes('news') ? 'news' : 'event';
                    html += `<span class="tag ${tagClass}">${escapeHtml(tag)}</span>`;
                });
            }
            html += `</div>`;
        });
    }
    
    if (section.insights) {
        html += `<div><h3>Key Insights</h3><p>${escapeHtml(section.insights)}</p></div>`;
    }
    
    html += `<div class="timestamp">Last analyzed: ${formatDateTime(section.timestamp || new Date().toISOString())}</div>`;
    
    div.innerHTML = html;
    return div;
}

function showError() {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('errorState').style.display = 'block';
}

function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function formatDateTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadTrackerData);
