<?php
namespace App\Test\TestCase\Controller;

use App\Controller\EventsController;
use Cake\TestSuite\IntegrationTestCase;

/**
 * App\Controller\EventsController Test Case
 */
class EventsControllerTest extends IntegrationTestCase
{

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'Events' => 'app.events',
        'Chapters' => 'app.chapters',
        'Media' => 'app.media',
        'Universes' => 'app.universes',
        'CharacterChangeVersions' => 'app.character_change_versions',
        'Characters' => 'app.characters',
        'CharacterChanges' => 'app.character_changes',
        'CharacterVersions' => 'app.character_versions',
        'MapChangeVersions' => 'app.map_change_versions',
        'Maps' => 'app.maps',
        'MapChanges' => 'app.map_changes',
        'MapVersions' => 'app.map_versions',
        'PlaceChangeVersions' => 'app.place_change_versions',
        'PlaceTypes' => 'app.place_types',
        'PlaceChanges' => 'app.place_changes',
        'Places' => 'app.places',
        'PlaceVersions' => 'app.place_versions',
        'PlaceTypeVersions' => 'app.place_type_versions',
        'MediaVersions' => 'app.media_versions',
        'UniverseVersions' => 'app.universe_versions',
        'ChapterVersions' => 'app.chapter_versions',
        'EventVersions' => 'app.event_versions',
        'EventPlaces' => 'app.event_places'
    ];

    /**
     * Test index method
     *
     * @return void
     */
    public function testIndex()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test view method
     *
     * @return void
     */
    public function testView()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test add method
     *
     * @return void
     */
    public function testAdd()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test edit method
     *
     * @return void
     */
    public function testEdit()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test delete method
     *
     * @return void
     */
    public function testDelete()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
